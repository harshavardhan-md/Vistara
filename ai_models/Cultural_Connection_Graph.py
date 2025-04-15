import streamlit as st
import google.generativeai as genai
import networkx as nx
import matplotlib.pyplot as plt
import json

# Configure Google Gemini API key
GOOGLE_API_KEY = "AIzaSyCumrV6ll-pzXu16nG8WZw7P1LkKqXw_lY"
genai.configure(api_key=GOOGLE_API_KEY)

# Initialize the Gemini Pro model
model = genai.GenerativeModel('gemini-2.0-flash')

# Set page configuration
st.set_page_config(
    page_title="Cultural Connection Graph",
    page_icon="🔄",
    layout="wide"
)

def main():
    st.title("🔄 Cultural Connection Graph")
    st.subheader("Discover connections between cultural elements")
    
    # Sample locations for demonstration
    locations = [
        "Mysore, Karnataka", 
        "Jaipur, Rajasthan", 
        "Varanasi, Uttar Pradesh",
        "Kerala Backwaters",
        "Hampi, Karnataka",
        "Darjeeling, West Bengal"
    ]
    
    # Cultural keywords
    keywords = [
        "Indian Classical Dance",
        "Temple Architecture",
        "Traditional Textiles",
        "Folk Music",
        "Festival Celebrations",
        "Ancient Crafts"
    ]
    
    # Tab selection for input type
    tab1, tab2 = st.tabs(["Search by Location", "Search by Cultural Element"])
    
    with tab1:
        selected_location = st.selectbox("Select a location:", locations)
        if st.button("Generate Location Graph"):
            generate_cultural_graph(selected_location, is_location=True)
    
    with tab2:
        selected_keyword = st.selectbox("Select a cultural element:", keywords)
        if st.button("Generate Cultural Element Graph"):
            generate_cultural_graph(selected_keyword, is_location=False)
    
    st.markdown("---")
    st.info("The Cultural Connection Graph visualizes relationships between places, festivals, crafts, and historical elements, helping you understand the rich interconnections in Indian cultural heritage.")

def generate_cultural_graph(query, is_location=True):
    with st.spinner("Generating cultural connections..."):
        # Generate prompt for Gemini
        if is_location:
            prompt = f"""Generate a JSON representation of cultural connections for {query}.
            Include related:
            1. Local festivals (at least 3)
            2. Traditional crafts (at least 3)
            3. Historical sites (at least 3)
            4. Cultural practices (at least 3)
            
            Format as a JSON with this structure:
            {{
                "center": "{query}",
                "connections": [
                    {{"type": "festival", "name": "Festival Name", "description": "Short description"}},
                    {{"type": "craft", "name": "Craft Name", "description": "Short description"}},
                    {{"type": "history", "name": "Historical Site", "description": "Short description"}},
                    {{"type": "practice", "name": "Cultural Practice", "description": "Short description"}}
                ]
            }}
            """
        else:
            prompt = f"""Generate a JSON representation of cultural connections for the cultural element: {query}.
            Include related:
            1. Key locations (at least 3)
            2. Important figures (at least 2)
            3. Related cultural elements (at least 3)
            4. Historical significance (at least 2)
            
            Format as a JSON with this structure:
            {{
                "center": "{query}",
                "connections": [
                    {{"type": "location", "name": "Location Name", "description": "Short description"}},
                    {{"type": "figure", "name": "Important Figure", "description": "Short description"}},
                    {{"type": "element", "name": "Related Element", "description": "Short description"}},
                    {{"type": "history", "name": "Historical Significance", "description": "Short description"}}
                ]
            }}
            """
        
        # Get response from Gemini
        response = model.generate_content(prompt)
        
        try:
            # Extract JSON from the response
            response_text = response.text
            # Find JSON content between triple backticks if present
            if "```json" in response_text and "```" in response_text:
                json_str = response_text.split("```json")[1].split("```")[0].strip()
            elif "```" in response_text:
                json_str = response_text.split("```")[1].split("```")[0].strip()
            else:
                json_str = response_text.strip()
            
            data = json.loads(json_str)
            
            # Create and display the graph
            create_graph_visualization(data)
            
            # Display the connection details
            st.subheader("Cultural Connections")
            for item in data["connections"]:
                st.markdown(f"**{item['name']}** ({item['type']}): {item['description']}")
                
        except Exception as e:
            st.error(f"Error processing the cultural graph data: {str(e)}")
            st.write("Raw response for debugging:")
            st.code(response.text)

def create_graph_visualization(data):
    # Create a graph
    G = nx.Graph()
    
    # Add the central node
    G.add_node(data["center"], type="center")
    
    # Add connections with color coding by type
    type_colors = {
        "festival": "red",
        "craft": "green",
        "history": "blue",
        "practice": "purple",
        "location": "orange",
        "figure": "brown",
        "element": "pink",
        "center": "yellow"
    }
    
    # Add edges and nodes
    for conn in data["connections"]:
        G.add_node(conn["name"], type=conn["type"])
        G.add_edge(data["center"], conn["name"])
    
    # Create the visualization
    plt.figure(figsize=(10, 8))
    pos = nx.spring_layout(G, seed=42)
    
    # Draw nodes with different colors based on type
    for node_type in set(nx.get_node_attributes(G, "type").values()):
        node_list = [node for node, data in G.nodes(data=True) if data.get("type") == node_type]
        nx.draw_networkx_nodes(G, pos, 
                              nodelist=node_list,
                              node_color=type_colors.get(node_type, "gray"),
                              node_size=500,
                              alpha=0.8)
    
    # Draw edges and labels
    nx.draw_networkx_edges(G, pos, width=1.0, alpha=0.5)
    nx.draw_networkx_labels(G, pos, font_size=10, font_family="sans-serif")
    
    # Add a legend
    legend_elements = [plt.Line2D([0], [0], marker='o', color='w', 
                                 label=t.capitalize(),
                                 markerfacecolor=c, markersize=10)
                      for t, c in type_colors.items() if t in nx.get_node_attributes(G, "type").values()]
    
    plt.legend(handles=legend_elements, loc='upper right')
    plt.axis('off')
    plt.tight_layout()
    
    # Display the graph in Streamlit
    st.pyplot(plt)

if __name__ == "__main__":
    main()