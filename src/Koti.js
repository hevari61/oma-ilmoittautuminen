import React, { Component } from "react";

class Koti extends Component {
    render() {
        return (
            <div>
                <h2>Puulaaki 2021-2022 syyskausi 21</h2>
                <p>Ilmoittaudu kilpailuun tästä</p>
                <p>Kirjaudu mukaan tästä</p>
                <form>
  <label>
    Name:
    <input type="text" name="Anna nimesi muodossa Sukunimi Etunimi" />
  </label>
  <input type="submit" value="Katso" />
</form>
            </div>
        );
    }
}

export default Koti;