type Props = {
  name: string
}

const Banner: React.FC<Props> = ({ name }) => {
  return (
    <div className="h-48 flex justify-center items-center bg-slate-200">
      <h1 className="text-2xl font-bold">{name}</h1>
    </div>
  )
}

export default Banner
