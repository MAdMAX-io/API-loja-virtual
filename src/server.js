/**
 * Arquivo de configuração da porta da API
 */
import app from './app'

const port = 3000;

app.listen(port, () => {
   console.log(`Port is run in ${port}`); 
});