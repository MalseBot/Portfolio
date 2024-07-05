import {
  proPic1,
  proPic12,
  proPic13,
  proPic14,
  proPic4,
  proPic42,
  proPic43,
  proPic44,
  proPic3,
  proPic32,
  proPic33,
  proPic34,
  proPic7,
  proPic72,
  proPic73,
  proPic74,
} from './assets'

const list = [
  {
    id: 1,
    img: proPic4,
    img2: proPic42,
    img3: proPic43,
    img4: proPic44,
    title: 'Phanox',
    altert: 'Phanox',
    descreption: 'Modern E-commerce website ',
    link: 'https://phanox-malse.netlify.app',
    gitLink: 'https://github.com/MalseBot/PHANOX-copy-',
    details: (
      <ul>
        <li># Built with React, Tailwind CSS</li>
        <li># Refined UI/UX</li>
        <li># Clean, modern aesthetic</li>
        <li># Intuitive navigation</li>
      </ul>
    ),
  },
  {
    id: 2,
    link: 'https://cashamalse.netlify.app',
    gitLink: 'https://github.com/MalseBot/casha-react-JS',
    altert: 'casha',
    title: 'casha',
    img: proPic1,
    img2: proPic12,
    img3: proPic13,
    img4: proPic14,
    descreption: 'e-commerce website',
    details: (
      <ul>
        <li># Built with React, Bootstrap CSS</li>
        <li># Refined UI/UX</li>
        <li># Clean, modern aesthetic</li>
        <li># Intuitive navigation</li>
      </ul>
    ),
  },
  {
    id: 3,
    title: 'shareHim',
    altert: 'shareHim',
    img: proPic3,
    img2: proPic32,
    img3: proPic33,
    img4: proPic34,
    link: 'https://sharehim.netlify.app',
    gitLink: 'https://github.com/MalseBot/ShareHim',
    descreption:
      'this app is where you share images, wallpapers and designs (alternative to pinterest).',
    details: (
      <ul>
        <li># Built with React, Tailwind CSS, and Sanity</li>
        <li># Exceptional API functionality</li>
        <li># Refined UI/UX</li>
        <li># Robust API integration</li>
        <li># Clean, modern aesthetic</li>
        <li># Intuitive navigation</li>
      </ul>
    ),
  },
  {
    id: 4,
    title: 'Snapgram',
    altert: 'snapgram',
    img: proPic7,
    img2: proPic72,
    img3: proPic73,
    img4: proPic74,
    link: 'https://snapgram-alt.netlify.app/',
    gitLink: 'https://github.com/MalseBot/insta-alt',
    descreption:
      'snapgram a website wher you share with the world your beautiful images and memories and many other interests.',
    details: (
      <ul>
        <li># Robust authentication system for security and privacy</li>
        <li># Explore page with a featured section for top creators</li>
        <li># Like and save functionality with dedicated management pages </li>
        <li>
          # User-friendly create post page with file management and drag-drop
        </li>
        <li>
          # Edit post functionality to allow users to update their content
        </li>
        <li>
          # Responsive UI with a bottom bar for seamless mobile navigation
        </li>
        <li>
          # React Query integration for efficient data fetching and caching
        </li>
        <li># Appwrite BaaS for streamlined backend development</li>
      </ul>
    ),
  },
]

export default list
