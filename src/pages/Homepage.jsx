import HeroImage from '../assets/images/hero.svg'
import AboutImage from '../assets/images/about.svg'
import Proyek1 from '../assets/images/proyek-1.webp'
import Proyek2 from '../assets/images/proyek-2.webp'
import Proyek3 from '../assets/images/proyek-3.webp'
import Proyek4 from '../assets/images/proyek-4.webp'
import Proyek5 from '../assets/images/proyek-5.webp'

function Homepage() {
  return (
    <div className="homepage">
      <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center pt-32">
          <div className="box">
            <h1 className='lg:text-5xl/tight text-3xl font-bold mb-7'>Belajar Membuat website dengan <span className="text-sky-400">Tailwind CSS</span> </h1>
            <p className='text-base/8 mb-7'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, atque sit consequatur nam tenetur at maiores, voluptatum iusto alias facilis vitae veniam laborum doloremque nobis labore aperiam! Optio, voluptate. Maiores.</p>
            <table className='min-w-full table-auto border-1 border-gray-400'>
              <thead className='justify-between'>
                <tr className='bg-indigo-200 w-full'>
                  <th className='px-1 py-2'>No</th>
                  <th className='px-10 py-2'>Nama</th>
                  <th className='px-10 py-2'>Alamat</th>
                </tr>
              </thead>
              <tbody>
                <tr className=''>
                  <td className='text-center border-r-1 border-b-1 border-gray-400'>1</td>
                  <td className='text-left p-1 border-r-1 border-b-1 border-gray-400'>Dahrul</td>
                  <td className='text-left p-1 border-r-1 border-b-1 border-gray-400'>Bandung</td>
                </tr>
                <tr>
                  <td className='text-center border-r-1 border-b-1 border-gray-400'>1</td>
                  <td className='text-left p-1 border-r-1 border-b-1 border-gray-400'>Dahrul</td>
                  <td className='text-left p-1 border-r-1 border-b-1 border-gray-400'>Bandung</td>
                </tr>
                <tr>
                  <td className='text-center border-r-1 border-b-1 border-gray-400'>1</td>
                  <td className='text-left p-1 border-r-1 border-b-1 border-gray-400'>Dahrul</td>
                  <td className='text-left p-1 border-r-1 border-b-1 border-gray-400'>Bandung</td>
                </tr>
                <tr>
                  <td className='text-center border-r-1 border-b-1 border-gray-400'>1</td>
                  <td className='text-left p-1 border-r-1 border-b-1 border-gray-400'>Dahrul</td>
                  <td className='text-left p-1 border-r-1 border-b-1 border-gray-400'>Bandung</td>
                </tr>
              </tbody>
            </table>
            <a href="#" className='bg-sky-300 hover:bg-sky-400 text-white py-2 px-4 rounded transition-all'> Tentang Kami <i className="ri-eye-line ms-1"></i></a>
          </div>
          <div className="box">
            <img src={HeroImage} className="md:w-full w-[400px] md:m-0 mx-auto" alt="Hero Image" />
          </div>
        </div>
        <div className="about grid md:grid-cols-2 grid-cols-1 items-center md:gap-10 md:pt-20 pt-32 gap-20" id='about'>
          <div className="box md:order-1 order-2">
            <img src={AboutImage} alt="About Image" className='lg:w-[500px] w-[400px] md:m-0 mx-auto' />
          </div>
          <div className="box md:order-2 order-1">
            <h1 className='lg:text-5xl/tight text-3xl font-bold mb-7'>Belajar Membuat website dengan <span className="text-sky-400">Tailwind CSS</span></h1>
            <p className='text-base/loose '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, atque sit consequatur nam tenetur at maiores, voluptatum iusto alias facilis vitae veniam laborum doloremque nobis labore aperiam! Optio, voluptate. Maiores.</p>
          </div>
        </div>
        <div className="services pt-32" id='services'>
          <h1 className='text-center lg:text-5xl/tight text-3xl font-medium mb-7'>Layanan</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sunt alias exercitationem ut voluptatem, cumque minus ratione asperiores consequuntur, porro officia? A provident atque officiis minus id dignissimos obcaecati adipisci?</p>
          <div className="services-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className='ri-number-1 text-3xl text-white'></i>
              <h3 className='text-xl font-bold text-white mt-6 md-2'>Service Name 1</h3>
              <p className='text-base/loose'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste omnis quasi quam eligendi eum soluta. Quia, unde! Consectetur, atque soluta iste sunt, itaque voluptate inventore placeat, consequuntur id aspernatur porro?</p>
            </div>
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className='ri-number-2 text-3xl text-white'></i>
              <h3 className='text-xl font-bold text-white mt-6 md-2'>Service Name 2</h3>
              <p className='text-base/loose'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste omnis quasi quam eligendi eum soluta. Quia, unde! Consectetur, atque soluta iste sunt, itaque voluptate inventore placeat, consequuntur id aspernatur porro?</p>
            </div>
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className='ri-number-3 text-3xl text-white'></i>
              <h3 className='text-xl font-bold text-white mt-6 md-2'>Service Name 3</h3>
              <p className='text-base/loose'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste omnis quasi quam eligendi eum soluta. Quia, unde! Consectetur, atque soluta iste sunt, itaque voluptate inventore placeat, consequuntur id aspernatur porro?</p>
            </div>
            
          </div>
        </div>
        <div className="proyek pt-32" id='proyek'>
        <h1 className='text-center lg:text-5xl/tight text-3xl font-medium mb-7'>Proyek</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sunt alias exercitationem ut voluptatem, cumque minus ratione asperiores consequuntur, porro officia? A provident atque officiis minus id dignissimos obcaecati adipisci?</p>
          <div className="proyek-box pt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box p-2 bg-white shadow">
                <img src={Proyek1} alt="Proyek 1" className='w-full h-[200px]'/>
                <h3  className='text-xl font-bold mt-6 md-2'>Proyek 1</h3>
                <p className='text-base/loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quas quisquam tempora facere, sit ullam ipsa dicta aspernatur minima. Iste rem repudiandae maiores, fugit quia amet expedita fuga maxime tempora?</p>
            </div>
            <div className="box p-2 bg-white shadow">
                <img src={Proyek2} alt="Proyek 2" className='w-full h-[200px]' />
                <h3 className='text-xl font-bold mt-6 md-2'>Proyek 2</h3>
                <p className='text-base/loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quas quisquam tempora facere, sit ullam ipsa dicta aspernatur minima. Iste rem repudiandae maiores, fugit quia amet expedita fuga maxime tempora?</p>
            </div>
            <div className="box p-2 bg-white shadow">
                <img src={Proyek3} alt="Proyek 3" className='w-full h-[200px]' />
                <h3 className='text-xl font-bold mt-6 md-2'>Proyek 3</h3>
                <p className='text-base/loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quas quisquam tempora facere, sit ullam ipsa dicta aspernatur minima. Iste rem repudiandae maiores, fugit quia amet expedita fuga maxime tempora?</p>
            </div>
            <div className="box p-2 bg-white shadow">
                <img src={Proyek4} alt="Proyek 4" className='w-full h-[200px]' />
                <h3 className='text-xl font-bold mt-6 md-2'>Proyek 4</h3>
                <p className='text-base/loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quas quisquam tempora facere, sit ullam ipsa dicta aspernatur minima. Iste rem repudiandae maiores, fugit quia amet expedita fuga maxime tempora?</p>
            </div>
            <div className="box p-2 bg-white shadow">
                <img src={Proyek5} alt="Proyek 5" className='w-full h-[200px]' />
                <h3 className='text-xl font-bold mt-6 md-2'>Proyek 5</h3>
                <p className='text-base/loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quas quisquam tempora facere, sit ullam ipsa dicta aspernatur minima. Iste rem repudiandae maiores, fugit quia amet expedita fuga maxime tempora?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
