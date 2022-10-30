
const Filter = () => {
  return (
    <div className="mt-[16px]">
      <p className="mb-2 text-center text-[#a22752] font-bold text-[20px]">CHOOSE CHARACTERISTICS</p>
      <div>
        
      </div>
      <div className="flex flex-col items-center">
        <div className="">
          <h2>By gender</h2>
          <div className="flex mt-4">
            <button className="mx-4 bg-[#a22752] px-6 py-2 rounded-xl text-white">BOY</button>
            <button className="mx-4 bg-[#a22752] px-6 py-2 rounded-xl text-white">GIRL</button>
            <button className="mx-4 bg-[#a22752] px-6 py-2 rounded-xl text-white">UNISEX</button>
          </div>
        </div>
        <div>
          theme
        </div>
        <div>
          origin
        </div>
        <div>
          length
        </div>
        <div>
          first letter
        </div>
      </div>
      
    </div>
  )
}

export default Filter