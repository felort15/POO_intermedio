//Metodos estaticos 

const juan = {
    name: "Juanito",
    age: 18,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse) {
      console.log("This", this);
      console.log("This.approvedCourses", this.approvedCourses);
      this.approvedCourses.push(newCourse);
    }
  };
    Object.seal(juan);//Ayuda a evitar que las propiedades sean modificadas
    Object.freeze(juan);//Congela todos los cambios que pudieran hacerse en las propiedas
  // console.log(Object.keys(juan));
  // console.log(Object.getOwnPropertyNames(juan));
  // console.log(Object.entries(juan));
  
  

  /*Object.defineProperties(juan, "navigator", {
      value:"Chrome",
      enumerable:true,
      writable:true,
      configurable:true,
      Esta propiedades sirven para modificar las partes de 
      del objeto se puedadn modificar o no dentro de la cosola del editor
  });*/


  console.log(Object.getOwnPropertyDescriptors(juan));

