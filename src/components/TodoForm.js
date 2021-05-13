import React, { useState } from 'react';

const TodoForm = ({insertTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        insertTodo(value);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                placeholder="Add new Task..."
                onChange={e => setValue(e.target.value)}
            />
        </form>
    )
}

export default TodoForm

//sis failas reikalingas, kad is ivedimo lauko butu paimtas vartotojo ivestos naujos uzduoties tekstas
//paimta informacija is ivedimo lauko bus ideta i state
//4 eiluteje useState('') nurodyta, kad pradine reiksme bus tuscia, svarus laukelis
//informacijos paemima darome su bootstrap komponentu form ir input type - kur bus ivesta reiksme, tai paimsime ja
//ivedus 17 eil garbanotuose skliaustuose value, jis susilinkina su 4 eilute const [value]
//placeholder - sufleris vartotojui laukelyje pilkom raidem
//19 eil: kai bus pasikeitimas, turime iskviesti metoda, kuris uzsetins (ides) i musu state ivestaja reiksme
//19 eil siuo atveju dedame ivyki onChange, nes kai pasikeicia; jeigu butu onClick, tai kai paklikins, sureaguos
//su fetch metodu onChange netiktu, labiau tiktu Submit, kai jau zmogus apsisprendzia, tada daryti uzklausa
//14 eiluteje forma turi ivyki onSubmit, kai bus patvirtinta, iskviesime metoda, kuris sustabdys formos persikrovima, patikrins, ar viskas gerai ivesta, ar neliko tusciu laukeliu, metodo pavadinima handleSubmit patys sugalvojome
//tada 6 eiluteje apsirasome musu sugalvota handleSubmit metoda. Jis turi ivyki savyje e.preventDefault - sustabdys formos persikrovima
//if formuluojame , kad jeigu bus tuscia, t.y.jeigu vartotojas neuzpildys laukelio
//dar galima if rasyti taip: if(value==='') return;
//if(!value) - reiskia false, vadinasi, reiksme tuscia ir sustok
//9 eil - pagrindiniame komponente noresim iskviesti esanti metoda, tai cia pasirasome is anksto
//10 eil - kad isvalytu forma; t.p. ir su reset dar butu galima
//galu gale isidedame 3 eiluteje {insertTodo}, nes turi susilinkinti su teviniu elementu Todo, ir einam i Todo