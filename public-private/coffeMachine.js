class CoffeMachine{
    #waterAmount;
    constructor(power){
        this._power=power;
    }
    set waterAmount(amount){
        this.#waterAmount=(amount>=0)? amount:0;
    }
    get waterAmount(){
        return this.#waterAmount;
    }
    get power(){
        return this.power;
    }
}

let machine =new CoffeMachine(100);
machine.waterAmount=100;
console.log(machine.waterAmount);