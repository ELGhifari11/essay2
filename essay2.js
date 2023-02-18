let perkenalan = {
    Name1 : "El ghifari",
    age1 : "17", 
    addres1 : "Bekasi",
    hobby : "Ngoding",
    intrduce() {
        return `Nama saya ` + this.Name1 + `, umur saya ` + this.age1 + ` Tahun,  Alamat saya di ` + this.addres1 + `, dan saya punya hobby yaitu ` + this.hobby
    }
};
console.log(perkenalan.intrduce());

