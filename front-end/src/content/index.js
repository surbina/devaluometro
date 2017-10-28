import React from 'react';
import './index.css';

import QuotationsGraph from '../quotations-graph';

export default function() {
  return(
    <div className="content">
      <h2 className="content-subhead">Cómo usar esta aplicación?</h2>
      <p>
          Para usar esta aplicacion introduce las variaciones salariales en el cuadro indicando el monto y el mes en el que comenzaron a aplicar. El grafico se ira actualizando de forma automatica.
      </p>

      <QuotationsGraph />
    </div>
  );
}
