/** displays the starting caravan setup screen */
export default function CaravanSetup() {
  return (
    <section>
      <h1>Saltbound: Survive the Sahara</h1>
      <h2>Outfit your Caravan</h2>
      <p>
        Your caravan begins its journey in Sijilmasa. Spend your 50 gold on
        camels, water, and an optional guide—but save enough to buy salt at your
        first stop, Taghaza. Every slab takes up space you could use for water
        on the journey to Walata, where you'll sell your salt. Choose wisely:
        your caravan must first survive the Sahara to collect its reward.
      </p>

      <form>
        <label>
          Caravan name
          <input type="text" name="name" required />
        </label>

        <label>
          Choose 2 or 3 camels — 10 gold and 10 cargo spaces each.
          <select name="camels" defaultValue="" required>
            <option value="" disabled>
              Choose 2 or 3
            </option>
            <option value="2">2 camels</option>
            <option value="3">3 camels</option>
          </select>
        </label>

        <label>
          Starting water - 1 gold and 1 cargo space per waterskin.
          <input
            type="number"
            name="water"
            min="0"
            step="1"
            defaultValue="10"
            required
          />
        </label>

        <label>
          Hire a guide for your caravan - 8 gold
          <select name="hasGuide" defaultValue="" required>
            <option value="" disabled>
              Choose Yes or No
            </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>

        <button type="submit">Confirm Caravan Setup</button>
      </form>
    </section>
  );
}
