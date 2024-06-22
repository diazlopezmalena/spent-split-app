import { Button } from "../components/atoms/Button/Button"

const Home = () => {
  return (
    <div className="bg-#817b71 min-h-screen p-10">
        <div className="flex flex-col place-items-center gap-5 max-w-[1300px] mx-auto">
            <h1>Spent Split App</h1>
            <Button>Split Spents</Button>
        </div>
    </div>
  )
}

export default Home