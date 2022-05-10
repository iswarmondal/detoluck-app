import { WebView } from 'react-native-webview';

export default function App() {
  return (
        <WebView 
        source={{ uri: 'http://detoluck.com/' }}
        setBuiltInZoomControls={false}
        />      
  );
}
