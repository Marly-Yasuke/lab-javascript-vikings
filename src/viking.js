// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    console.log(`Only ${this.health}HP left.`);
  }
}

let soldierTest = new Soldier(40, 50);

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if(this.health <= 0){
      return `${this.name} has died in act of combat`
    }else{
      return `${this.name} has received ${damage} points of damage`
    }
  }
  battleCry(){
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier{
  constructor(health, strength){
    super(health, strength)
  }
  receiveDamage(damage){
    this.health -= damage;
    if(this.health<=0){
      return "A Saxon has died in combat"
    }else{
      return `A Saxon has received ${damage} points of damage`
    }
  }
}

// Only Bonuses left

// War
class War{

}
console.log(War)
