
  {mostrarLacteos && (
 <div ref={this.lacteosRef}>
          <Layout>
            <Lacteos
              agregarAlCarro={this.agregarAlCarro}
              lacteos={this.state.lacteos}
            />
            <button className='ir-carro' onClick={this.scrollToCar}> Ir al pagar </button>
          </Layout>
        </div>

          
        )}
