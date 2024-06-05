import MainImage from "./assets/image-omelette.jpeg";

function App() {
  const isMobile = window.matchMedia("(orientation: portrait)").matches;
  return (
    <div
      className={`container ${
        isMobile ? "w-100 pt-3" : "w-50 my-5 p-5"
      }  bg-white rounded`}
      style={{ height: "fit-content" }}
    >
      <img src={MainImage} className="w-100 rounded" alt="" />
      <div className="container p-4 px-0">
        <h1 className="mb-3">Simple Omelette Recipe</h1>
        <p className="mt-3 text-muted">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
      </div>
      <div
        style={{ backgroundColor: "#fff7fc" }}
        className="container p-4 m-4 rounded"
      >
        <h2 style={{ color: "#5d203a" }}>Preparation time</h2>
        <ul>
          {[
            ["Total", ": Approximately 10 minutes"],
            ["Preparation", ": 5 minutes"],
            ["Cooking", ": 5 minutes"],
          ].map(([preperationType, preperation]: string[]) => (
            <li className="my-2 text-muted li-pink">
              <b>{preperationType}</b>
              {preperation}
            </li>
          ))}
        </ul>
      </div>
      <div className="container p-4">
        <h2 style={{ color: "#824532" }}>Ingredients</h2>
        <ul>
          {[
            "2-3 large eggs",
            "Salt, to taste",
            "Pepper, to taste",
            "1 tablespoon of butter or oil",
            "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
          ].map((ingredient: string) => (
            <li key={ingredient} className="my-3 text-muted li-orange">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div className="container p-4">
        <h2 style={{ color: "#824532" }}>Instructions</h2>
        <ol>
          {[
            [
              "Beat the eggs",
              ": In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
            ],
            [
              "Heat the pan",
              ": Place a non-stick fryingpan over medium heat and add butter or oil.",
            ],
            [
              "Cook the omelette",
              ": Oncethe butter is melted and bubbling, pour in the eggs. Tilt the pan toensure the eggs evenly coat the surface.",
            ],
            [
              "Add fillings (optional)",
              ": When the eggs begin to set at the edges but are still slightly runnyin the middle, sprinkle your chosen fillings over one half of theomelette.",
            ],
            [
              "Fold and serve",
              ": As the omelette continues to cook,carefully lift one edge and fold it over the fillings. Let it cook foranother minute, then slide it onto a plate.",
            ],
            ["Enjoy", ": Serve hot, withadditional salt and pepper if needed."],
          ].map(([instructionType, instruction]) => (
            <li className="my-3 text-muted li-orange">
              <b>{instructionType}</b>
              {instruction}
            </li>
          ))}
        </ol>
      </div>
      <hr />
      <div className="container p-4">
        <h2 style={{ color: "#824532" }} className="">
          Nutrition
        </h2>
        <p className="text-muted fw-bold">
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>
        <table className="table">
          <tbody>
            {[
              ["Calories", "277kcal"],
              ["Carbs", "0g"],
              ["Protein", "20g"],
              ["Fat", "22g"],
            ].map(([nutritionItem, nutritionValue]) => (
              <tr>
                <th className="text-muted">{nutritionItem}</th>
                <td style={{ color: "#824532" }} className="fw-bold">
                  {nutritionValue}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
