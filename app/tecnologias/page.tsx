import tecnologias from '@/app/data/tecnologias.json';

export default function page() {

const listaTecnologias = JSON.parse(JSON.stringify(tecnologias))

  return (
    <div>
        <h2>Tecnologias Exploradas</h2>

        <div>
    {listaTecnologias.map((tecnologia : any, i: number) => {
        return (
            <div key={i} className="bg-white text-black rounded-xl shadow-lg p-6 m-4">

                <img
                    className="object-contain mb-4"
                    src={`/tecnologias/${tecnologia.image}`}
                    alt={tecnologia.title}
                    width={80}
                    height={80}
                />


                <h3>{tecnologia.title}</h3>
                <p>{tecnologia.description}</p>
                <p>Rating: {tecnologia.rating}/5</p>
            </div>
        )
    })}
</div>
    </div>
  )
}
