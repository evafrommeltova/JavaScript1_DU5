
const selectPlan = (planNumber) =>{
  const myElement1 = document.getElementById("plan1")
  const myElement2 = document.getElementById("plan2")
  const myElement3 = document.getElementById("plan3")

  switch(planNumber){
      case 1: 
        myElement1.classList.add("plan--selected")
        myElement2.classList.remove("plan--selected")
        myElement3.classList.remove("plan--selected")
        break
      case 2:      
        myElement2.classList.add("plan--selected")
        myElement1.classList.remove("plan--selected")
        myElement3.classList.remove("plan--selected")
        break
      default:
        myElement3.classList.add("plan--selected")
        myElement2.classList.remove("plan--selected")
        myElement1.classList.remove("plan--selected")
  }
}

const select = selectPlan(3)
