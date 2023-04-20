import Image from "next/image";

const UnitCard = () => {
  return (
    <div>
      <h4>My unit name</h4>
      <p>20 models</p>
      <ul>
        <li>my first weapon</li>
      </ul>
    </div>
  );
};

export default function Home() {
  return (
    <main className="text-center py-8">
      <h1 className="text-xl">Welcome to </h1>

      {/* <h2>
        Enter or <button>import</button>
      </h2> */}

      <button className="rounded bg-purple-600">Add a unit</button>

      <div className="sm:flex items-center space-y-4 sm:space-y-4 sm:space-x-4">
        <div>
          <label className="block" htmlFor="attacks">
            attacks
          </label>
          <input type="number" name="attacks" />
        </div>

        <div>
          <label className="block" htmlFor="to_hit">
            to_hit
          </label>
          <input type="number" name="to_hit" />
        </div>

        <div>
          <label className="block" htmlFor="to_wound">
            to_wound
          </label>
          <input type="number" name="to_wound" />
        </div>

        <div>
          <label className="block" htmlFor="rend">
            rend
          </label>
          <input type="number" name="rend" />
        </div>

        <div>
          <label className="block" htmlFor="damage">
            damage
          </label>
          <input type="number" name="damage" />
        </div>
      </div>
    </main>
  );
}
