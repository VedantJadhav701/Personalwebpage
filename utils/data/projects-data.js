export const projectsData = [
  {
    id: 1,
    name: 'Crop and Fertilizer Recommendation System',
    description:
      "A machine learning-based web application that recommends suitable crops and fertilizers based on inputs like soil type, pH, temperature, humidity, and rainfall. The backend uses classification and regression models trained on agricultural datasets. It integrates a Selenium-powered Flask API to scrape real-time market prices from Agmarknet, supports region-wise prediction, and provides a responsive UI via Streamlit.",
    tools: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Matplotlib',
      'Seaborn',
      'Flask',
      'Selenium',
      'BeautifulSoup',
      'Streamlit',
      'Heroku / Streamlit Cloud',
      'Google Colab',
      'Git',
      'HTML',
      'CSS'
    ],
    role: 'Machine Learning Engineer',
    code: 'https://github.com/VedantJadhav701/AGRIPREDICTOR',
    demo: 'https://agripredictor.streamlit.app/'
  },
  {
    id: 2,
    name: 'Movie Recommender System',
    description:
      'Built a content-based movie recommendation engine using NLP, CountVectorizer, and cosine similarity. It allows users to get recommendations by tags, genres, cast, or production company. Posters are fetched using TMDb API, and the frontend is built using Streamlit. Heavy files are managed with Git LFS or dynamically loaded from external sources.',
    tools: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit', 'TMDb API', 'Git LFS'],
    role: 'Machine Learning Engineer / Frontend Developer',
    code: 'https://github.com/VedantJadhav701/Movie-Recommender-System',
    demo: 'https://fast-movie-recommender.streamlit.app/'
  },
  {
    id: 3,
    name: 'Fake News Detection',
    description:
      "A text classification app that detects whether a news article is fake or real using a Passive Aggressive Classifier and TF-IDF Vectorizer. The app is built with Streamlit and trained on Kaggle's fake and real news datasets. Includes preprocessing (stopwords removal, stemming) using NLTK.",
    tools: ['Python', 'Scikit-learn', 'Pandas', 'NLTK', 'Streamlit', 'TF-IDF'],
    role: 'Machine Learning Engineer',
    code: 'https://github.com/VedantJadhav701/fake-news-detections-main',
    demo: 'https://fakenewspredictor.streamlit.app/'
  },
  // Replace ID 4 in your portfolio with:
  { 
  id: 4,
  name: 'Loan Eligibility Predictor',
  description:
    "A classification-based web app that predicts loan approval based on applicant details like income, education, credit history, and loan amount. Uses Logistic Regression and Random Forest models. UI built in Streamlit with real-time form input.",
  tools: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit', 'Matplotlib'],
  role: 'Machine Learning Engineer',
  code: 'https://github.com/VedantJadhav701/Loan-prediction',
  demo: 'https://fastloanpredict.streamlit.app/'
 }

];
