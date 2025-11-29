function walkDog() {

    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            const walkedDog = true;
            
            if(walkedDog) {
                resolve("YOU WALKED YOUR DOG")
            }
            else {
                reject("YOU DIDNT WALK YOUR DOG")
            }
            
        },1500);
    });
}

function cleanKitchen() {
    return new Promise((resolve,reject) => {
         
        setTimeout(()=> {
            const cleanedKitchen = false;
            
            if(cleanedKitchen) {
                resolve("YOU CLEANED THE KITCHEN")
            }
            else {
                reject("YOU DIDNT CLEAN THE KITCHEN")
            }

        },2500);
    });
}

function throwTrash() {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            const threwThrash = true;

            if(threwThrash) {
                resolve("YOU THREW THE TRASH")
            }
            else {
                reject("YOU DIDNT THROW THE TRASH")
            }

        },500);
    });
}

async function doChores() {
     try {
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const  cleanKitchenResult= await cleanKitchen();
        console.log(cleanKitchenResult);

        const throwTrashResult = await throwTrash();
        console.log(throwTrashResult);

        console.log("ALL CHORES COMPLETED");
     }
     catch(error) {
        console.error(error)
     }
}

doChores();
