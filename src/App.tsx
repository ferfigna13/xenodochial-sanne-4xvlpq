import react from 'react';
import { input } from './components/ui/input';
import { textarea } from './components/ui/textarea';
import { button } from './components/ui/button';

interface MusicProps {}

interface MusicState {
  theme: string;
  subject: string;
  adjective: string;
  lyrics: string;
}

const music: react.FC<MusicProps> = () => {
  const [state, setState] = react.useState<MusicState>({
    theme: '',
    subject: '',
    adjective: '',
    lyrics: '',
  });

  const handleInputChange = (event: react.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleTextareaChange = (event: react.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const generateMusic = () => {
    const { theme, subject, adjective } = state;
    const lyrics = `In the ${adjective} moonlight, where the ${theme} whispers low
Of the ${subject} that only the heart may know
The rhythm weaves a gentle spell
That beckons us to follow, to a place where love dwells`;
    setState({ ...state, lyrics });
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-12 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Music Generator</h2>
      <input
        type="text"
        name="theme"
        value={state.theme}
        onChange={handleInputChange}
        placeholder="Theme (e.g. night, love, heartbreak)"
        className="w-full p-2 mb-4 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
      />
      <input
        type="text"
        name="subject"
        value={state.subject}
        onChange={handleInputChange}
        placeholder="Subject (e.g. heart, soul, memories)"
        className="w-full p-2 mb-4 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
      />
      <input
        type="text"
        name="adjective"
        value={state.adjective}
        onChange={handleInputChange}
        placeholder="Adjective (e.g. beautiful, melancholic, joyful)"
        className="w-full p-2 mb-4 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
      />
      <button
        onClick={generateMusic}
        className="w-full p-2 mb-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
      >
        Generate Music
      </button>
      <textarea
        name="lyrics"
        value={state.lyrics}
        onChange={handleTextareaChange}
        placeholder="Generated Lyrics"
        className="w-full p-2 mb-4 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
      />
    </div>
  );
};

export default music;