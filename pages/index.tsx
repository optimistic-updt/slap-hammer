import { profile } from "console";
import Image from "next/image";
import { FC, useState } from "react";
import { UNITS } from "./aos-list";

type WeaponProfile = {
  // active: true;
  // num_models: number;
  attacks: number;
  to_hit: number;
  to_wound: number;
  rend: number;
  damage: number;
  modifiers: [] | undefined;
  uuid: string;
  name: string;
};

type Unit = {
  uuid: string;
  name: string;
  numModels: number;
  numLeaders: number | null;
  weaponProfiles: WeaponProfile[];
};

const UnitCard: FC<{ unit: Unit }> = ({ unit }) => {
  return (
    <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6 text-left rounded-md">
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        {unit.name}
      </h3>
      <p className="text-xs text-gray-700">leader, musician, banner</p>

      <ul className="mt-3 sm:mt-6 space-y-2">
        {unit.weaponProfiles.map((weapon) => {
          return (
            <li key={weapon.uuid} className="text-black border rounded-md p-2">
              <h4>{weapon.name}</h4>

              <ul className="grid grid-cols-5 gap-4 text-center">
                <li>
                  <h5>Attk</h5>
                  <p>{weapon.attacks}</p>
                </li>
                <li>
                  <h5>Hit</h5>
                  <p>{weapon.to_hit}</p>
                </li>
                <li>
                  <h5>Wound</h5>
                  <p>{weapon.to_wound}</p>
                </li>
                <li>
                  <h5>Rend</h5>
                  <p>{weapon.rend}</p>
                </li>
                <li>
                  <h5>Dmg</h5>
                  <p>{weapon.damage}</p>
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default function Home() {
  const [units, setUnits] = useState(UNITS);
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center py-8 space-y-8">
      <h1 className="text-xl">Slap-hammer</h1>

      {/* <h2>
        Enter or <button>import</button>
      </h2> */}

      <button className="rounded bg-purple-600">Add a unit</button>

      <ul className="space-y-4">
        {units.map((unit) => {
          return <UnitCard key={unit.uuid} unit={unit} />;
        })}
      </ul>

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
