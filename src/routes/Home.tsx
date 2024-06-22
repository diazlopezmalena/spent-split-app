import { Button } from '../components/atoms/Button/Button'
import Text from '../components/atoms/Text'

const Home = () => {
  return (
    <div className="bg-[#817b71] min-h-screen p-10">
      <div className="flex flex-col place-items-center gap-5 max-w-[1300px] mx-auto">
        <Text as="h1" variant="H2">
          Spent Split App
        </Text>
        <Button>Split Spents</Button>
      </div>
    </div>
  )
}

export default Home
