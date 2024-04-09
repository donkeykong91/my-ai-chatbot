// Docs
const RESUME =
  'C:\\Users\\daryl\\WebstormProjects\\ai-chatbot\\src\\assets\\resume.docx';

// AI
const PROMPT = `Only Bullet point the top 8 skills.
     Always start the answer with 'Contact Daryl to schedule an interview!'.
     Always answer with 50 characters per bullet point.
     Always answer in a professional manner as though speaking with a 
     recruiter for a Senior Software Developer role.
     Always answer with more emphasis on the architecture development and security.
     If there is no positive answer, respond with 'Contact Daryl to schedule an interview!
     
                                                   Ask me another question about Daryl!'.
     Answer the question based on the following context:
  
     {context}`;
const AI_AUDIENCE = 'ai';
const HUMAN_AUDIENCE = 'human';
const QUESTION = '{question}';

export { RESUME, PROMPT, AI_AUDIENCE, HUMAN_AUDIENCE, QUESTION };
