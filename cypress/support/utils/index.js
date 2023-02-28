// /// <reference types="cypress" />

class GenericsUtils {
  functionDadosUser() {

    fetch('https://randomuser.me/api')
      .then(data => {
        return data.json();
      })
      .then(post => {

        // console.log(post)

        var payload = {
          nome: post.results[0].name.first + ' ' + post.results[0].name.last,
          email: post.results[0].email,
          senha: post.results[0].login.password
        }

        //console.log(payload)

        return payload
      });

    // const url = 'https://randomuser.me/api';

    // var request = new Request(url, {
    //   method: 'POST',
    //   // body: new Body(),
    //   // headers: new Headers()
    // });

    // console.log(request)

    // return request

    // cy.request({
    //   method: 'GET',
    //   url: 'https://randomuser.me/api/',
    //   qs: 'results=1'
    // }).then((response) => {

    //   var payload = {
    //     nome: response.body["results"][0].name.first + ' ' + response.body["results"][0].name.last,
    //     email: response.body["results"][0].email,
    //     senha: response.body["results"][0].login.password
    //   }

    //   console.log(payload)
    //   console.log(payload.nome)
    //   console.log(payload.email)
    //   console.log(payload.senha)

    //   return payload.json()

    // })
  }
}

const Globais = {
  genericsUtils: new GenericsUtils(),
};
export default Globais;