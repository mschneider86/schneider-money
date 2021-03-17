import { Container } from './styles';

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de aplicativo</td>
            <td className='deposit'>$18.000</td>
            <td>Desenvolvimento</td>
            <td>01/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de sistema web</td>
            <td className='deposit'>$12.000</td>
            <td>Desenvolvimento</td>
            <td>11/03/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de aplicativo</td>
            <td className='deposit'>$18.000</td>
            <td>Desenvolvimento</td>
            <td>01/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className='withdraw'>- $1.500</td>
            <td>Casa</td>
            <td>05/03/2021</td>
          </tr>
          <tr>
            <td>Condomínio</td>
            <td className='deposit'>- $500</td>
            <td>Casa</td>
            <td>05/03/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de sistema web</td>
            <td className='deposit'>$12.000</td>
            <td>Desenvolvimento</td>
            <td>11/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}