const dogs = {
  name: "Tomy",
  age: 6,
  breed: "Rot Willer",
  used: "pet",
  specialFeature: "aggressiveness",
  description: function () {
    return `${this.name} who is ${this.age} which is ${this.breed} is used as ${this.used} in house, it
        is well known for its ${dogs.specialFeature}`;
  },
};

//console.log(dogs.description());
dogs.name = "Ricky1";
console.log(dogs);
dogs["specialFeature"] = "protecting its master";
