import App from '../components/App'
import Button from '@material-ui/core/Button';

export default function Home() {
  return (
    <App>
      <p>Index Page by TypeScript!</p>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </App>
  )
}
