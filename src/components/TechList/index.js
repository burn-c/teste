import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

// import { Container } from './styles';

export default function TechList() {

    const [newTech, setNewTech] = useState([]);

    const dispactch = useDispatch();
    const techs = useSelector(state => state.techs);

    // useEffect(() => {
    //   const techs = localStorage.getItem('techs');

    //   if (techs) {
    //     setTechs(JSON.parse(techs));
    //   }
    // },[]);
    // useEffect(() => {
    //   localStorage.setItem('techs', JSON.stringify(techs));
    
    // }, [techs]);

    function handleAddTech() {
        dispactch({ type: 'ADD_TECH', payload: {tech: newTech}});
        setNewTech('');
        
    }

  return (
    <form data-testid="tech-form" onSubmit={handleAddTech}>
        <ul data-testid="tech-list">
            {techs.map(tech => <li key={tech}>{tech}</li> )}
        </ul>

        <label htmlFor="tech">Tech</label>
        <input id="tech" value={newTech} onChange={e => setNewTech(e.target.value)} />

        <button onClick={handleAddTech}>Adicionar</button>
    </form>
  );
}
