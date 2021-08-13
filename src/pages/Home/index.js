import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

function App(props) {

  const history = useHistory();
  const [ user, setUser ] = useState('');
  const [ error, setError ] = useState(false);

  function handleSearch() {
    axios.get(`https://api.github.com/users/${user}/repos`)
    .then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setError(false);
      history.push('/repositories');
    })
    .catch(error => {
      setError(true);
    });
  }

  return (
    <S.HomeContainer>
      <S.Content>
        <S.Input className="user-input" placeholder="Nome de Usuário GitHub" value={user} onChange={e => setUser(e.target.value)} />
        <S.Button type="button" onClick={handleSearch}>Pesquisar</S.Button>
      </S.Content>
        { error ? <S.ErrorMsg>Usuário não encontrado, tente novamente ;) </S.ErrorMsg> : '' }
    </S.HomeContainer>
  );
}

export default App;