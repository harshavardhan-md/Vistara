import streamlit as st
import google.generativeai as genai
from PIL import Image
import io

# Configure Google Gemini API key
GOOGLE_API_KEY = "AIzaSyCumrV6ll-pzXu16nG8WZw7P1LkKqXw_lY"
genai.configure(api_key=GOOGLE_API_KEY)

# Initialize the Gemini models
model = genai.GenerativeModel('gemini-2.0-flash')
model_vision = genai.GenerativeModel('gemini-2.0-flash')

# Set page configuration
st.set_page_config(
    page_title="StoryWeaver AI",
    page_icon="✍️",
    layout="wide"
)

def main():
    st.title("✍️ StoryWeaver AI")
    st.subheader("Generate a cultural tale based on an image or text memory")
    
    # Language selection
    language = st.selectbox(
        "Select output language:",
        ["English", "Hindi", "Kannada"]
    )
    
    # Input method selection
    input_method = st.radio(
        "Choose input method:",
        ["Upload an image", "Enter a travel memory"]
    )
    
    if input_method == "Upload an image":
        uploaded_file = st.file_uploader("Upload a travel image", type=["jpg", "jpeg", "png"])
        
        if uploaded_file is not None:
            # Display the uploaded image
            image = Image.open(uploaded_file)
            st.image(image, caption="Uploaded Image", use_column_width=True)
            
            if st.button("Generate Story"):
                with st.spinner("Weaving your story..."):
                    # Prepare the prompt based on language
                    if language == "English":
                        prompt = "Create a poetic or folk-style tale inspired by the local culture shown in this image. Make it authentic to the region's storytelling tradition."
                    elif language == "Hindi":
                        prompt = "इस छवि में दिखाई गई स्थानीय संस्कृति से प्रेरित एक काव्यात्मक या लोक-शैली की कहानी बनाएं। इसे क्षेत्र की कहानी कहने की परंपरा के अनुरूप बनाएं। हिंदी में उत्तर दें।"
                    else:  # Kannada
                        prompt = "ಈ ಚಿತ್ರದಲ್ಲಿ ತೋರಿಸಿರುವ ಸ್ಥಳೀಯ ಸಂಸ್ಕೃತಿಯಿಂದ ಪ್ರೇರಿತವಾದ ಕಾವ್ಯಾತ್ಮಕ ಅಥವಾ ಜಾನಪದ ಶೈಲಿಯ ಕಥೆಯನ್ನು ರಚಿಸಿ. ಅದನ್ನು ಪ್ರದೇಶದ ಕಥೆ ಹೇಳುವ ಸಂಪ್ರದಾಯಕ್ಕೆ ಸಾಂಪ್ರದಾಯಿಕವಾಗಿಸಿ. ಕನ್ನಡದಲ್ಲಿ ಉತ್ತರಿಸಿ."
                    
                    # Get image bytes
                    img_byte_arr = io.BytesIO()
                    image.save(img_byte_arr, format=image.format)
                    img_byte_arr = img_byte_arr.getvalue()
                    
                    # Generate response
                    response = model_vision.generate_content([prompt, {"mime_type": f"image/{image.format.lower()}", "data": img_byte_arr}])
                    
                    # Display the story
                    st.markdown("### Your Cultural Tale")
                    st.write(response.text)
    
    else:  # Text input
        memory = st.text_area("Enter your travel memory or description:", height=150)
        
        if memory and st.button("Generate Story"):
            with st.spinner("Weaving your story..."):
                # Prepare the prompt based on language
                if language == "English":
                    prompt = f"Create a poetic or folk-style tale inspired by this travel memory: '{memory}'. Make it authentic to the region's storytelling tradition."
                elif language == "Hindi":
                    prompt = f"इस यात्रा स्मृति से प्रेरित एक काव्यात्मक या लोक-शैली की कहानी बनाएं: '{memory}'. इसे क्षेत्र की कहानी कहने की परंपरा के अनुरूप बनाएं। हिंदी में उत्तर दें।"
                else:  # Kannada
                    prompt = f"ಈ ಪ್ರಯಾಣದ ನೆನಪಿನಿಂದ ಪ್ರೇರಿತವಾದ ಕಾವ್ಯಾತ್ಮಕ ಅಥವಾ ಜಾನಪದ ಶೈಲಿಯ ಕಥೆಯನ್ನು ರಚಿಸಿ: '{memory}'. ಅದನ್ನು ಪ್ರದೇಶದ ಕಥೆ ಹೇಳುವ ಸಂಪ್ರದಾಯಕ್ಕೆ ಸಾಂಪ್ರದಾಯಿಕವಾಗಿಸಿ. ಕನ್ನಡದಲ್ಲಿ ಉತ್ತರಿಸಿ."
                
                # Generate story
                response = model.generate_content(prompt)
                
                # Display the story
                st.markdown("### Your Cultural Tale")
                st.write(response.text)
    
    st.markdown("---")
    st.info("StoryWeaver AI transforms your travel memories into culturally authentic tales, leveraging Google Gemini AI to create stories in the style of local traditions.")

if __name__ == "__main__":
    main()