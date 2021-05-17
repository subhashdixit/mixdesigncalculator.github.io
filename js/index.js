

 function myFunction() {     
    var gradeOfConcrete = document.getElementById("gradeOfConcrete").value;
    // document.getElementById("demo").innerHTML = gradeOfConcrete;

    var maximumNominalSizeOfAggregate = document.getElementById("maximumNominalSizeOfAggregate").value;
    // document.getElementById("demo1").innerHTML = maximumNominalSizeOfAggregate;

    var exposureConditions = document.getElementById("exposureConditions").value;
    // document.getElementById("demo2").innerHTML = exposureConditions;

    var workability = document.getElementById("workability").value;
    // document.getElementById("demo3").innerHTML = workability;

    var waterCementRatio = document.getElementById("waterCementRatio").value;
    // document.getElementById("demo4").innerHTML = waterCementRatio;

    var maxOpcContent = document.getElementById("maxOpcContent").value;
    // document.getElementById("demo5").innerHTML = maxOpcContent;

    var specificGravityOfCement = document.getElementById("specificGravityOfCement").value;
    // document.getElementById("demo6").innerHTML = specificGravityOfCement;

    var specificGravityOfCoarseAggregate = document.getElementById("specificGravityOfCoarseAggregate").value;
    // document.getElementById("demo7").innerHTML = specificGravityOfCoarseAggregate;

    var specificGravityOfFineAggregate = document.getElementById("specificGravityOfFineAggregate").value;
    // document.getElementById("demo8").innerHTML = specificGravityOfFineAggregate;

    var specificGravityOfFlyAsh = document.getElementById("specificGravityOfFlyAsh").value;
    // document.getElementById("demo9").innerHTML = specificGravityOfFlyAsh;

    var specificGravityOfSilicaFume = document.getElementById("specificGravityOfSilicaFume").value;
    // document.getElementById("demo10").innerHTML = specificGravityOfSilicaFume;

    var specificGravityOfChemicalAdmixture = document.getElementById("specificGravityOfChemicalAdmixture").value;
    // document.getElementById("demo11").innerHTML = specificGravityOfChemicalAdmixture;

    var waterAbsorptionOfCoarseAggregate = document.getElementById("waterAbsorptionOfCoarseAggregate").value;
    // document.getElementById("demo12").innerHTML = waterAbsorptionOfCoarseAggregate;

    var waterAbsorptionOfFineAggregate = document.getElementById("waterAbsorptionOfFineAggregate").value;
    // document.getElementById("demo13").innerHTML = waterAbsorptionOfFineAggregate;

    var moistureContentOfCoarseAggregate = document.getElementById("moistureContentOfCoarseAggregate").value;
    // document.getElementById("demo14").innerHTML = moistureContentOfCoarseAggregate;

    var moistureContentOfFineAggregate = document.getElementById("moistureContentOfFineAggregate").value;
    // document.getElementById("demo15").innerHTML = moistureContentOfFineAggregate;

    var zoneOfFineAggregate = document.getElementById("zoneOfFineAggregate").value;
    // document.getElementById("demo16").innerHTML = zoneOfFineAggregate;

    // Step:1 --->Calculation Of Target Strength

    //  Value Of X

    if ((gradeOfConcrete == "m10") || (gradeOfConcrete == "m15")) {
        var x = 5;
    }
    else if ((gradeOfConcrete == "m20") || (gradeOfConcrete == "m25")) {
        var x = 5.5;
    }
    else if ((gradeOfConcrete == "m30") || (gradeOfConcrete == "m35") || (gradeOfConcrete == "m40") || (gradeOfConcrete == "m45") || (gradeOfConcrete == "m50") || (gradeOfConcrete == "m55") || (gradeOfConcrete == "m60")) {
        var x = 6.5;
    }
    else {
        var x = 8.0;
    }

    // Value Of Standard Deviation

    if ((gradeOfConcrete == "m10") || (gradeOfConcrete == "m15")) {
        var standardDeviation = 3.5;
    }
    else if ((gradeOfConcrete == "m20") || (gradeOfConcrete == "m25")) {
        var standardDeviation = 4;
    }
    else if ((gradeOfConcrete == "m30") || (gradeOfConcrete == "m35") || (gradeOfConcrete == "m40") || (gradeOfConcrete == "m45") || (gradeOfConcrete == "m50") || (gradeOfConcrete == "m55") || (gradeOfConcrete == "m60")) {
        var standardDeviation = 5;
    }
    else {
        var standardDeviation = 6;
    }

    // fck value

    if (gradeOfConcrete == "m10") {
        var fck = 10;
    }
    else if (gradeOfConcrete == "m15") {
        var fck = 15;
    }
    else if (gradeOfConcrete == "m20") {
        var fck = 20;
    }
    else if (gradeOfConcrete == "m25") {
        var fck = 25;
    }
    else if (gradeOfConcrete == "m30") {
        var fck = 30;
    }
    else if (gradeOfConcrete == "m35") {
        var fck = 35;
    }
    else if (gradeOfConcrete == "m40") {
        var fck = 40;
    }
    else if (gradeOfConcrete == "m45") {
        var fck = 45;
    }
    else if (gradeOfConcrete == "m50") {
        var fck = 50;
    }
    else if (gradeOfConcrete == "m55") {
        var fck = 55;
    }
    else if (gradeOfConcrete == "m60") {
        var fck = 60;
    }
    else if (gradeOfConcrete == "m65") {
        var fck = 65;
    }
    else if (gradeOfConcrete == "m70") {
        var fck = 70;
    }
    else if (gradeOfConcrete == "m75") {
        var fck = 75;
    }
    else if (gradeOfConcrete == "m80") {
        var fck = 80;
    }
    else if (gradeOfConcrete == "m85") {
        var fck = 85;
    }
    else if (gradeOfConcrete == "m90") {
        var fck = 90;
    }
    else if (gradeOfConcrete == "m95") {
        var fck = 95;
    }
    else if (gradeOfConcrete == "m100") {
        var fck = 100;
    }

    var targetStrength1 = fck + 1.65 * standardDeviation;
    var targetStrength2 = fck + x;

    if (targetStrength1 > targetStrength2) {
        var finalTargetStrength = targetStrength1;
    }
    else {
        var finalTargetStrength = targetStrength2;
    }
    // document.getElementById("demo17").innerHTML = x;
    // document.getElementById("demo18").innerHTML = finalTargetStrength;

    // Step-2:---> Calculation Of Approximate Air Content

    if (maximumNominalSizeOfAggregate == "10 mm") {
        var entrappedAir = 1.0;
    }
    else if (maximumNominalSizeOfAggregate == "12.5 mm") {
        var entrappedAir = 0.8;
    }
    else {
        var entrappedAir = 0.5;
    }

    // step-3:---> Calculation Of Water Cementious Materials Ratio


    // step4:---> Calculation Of Water Content

    if (maximumNominalSizeOfAggregate == "10 mm") {
        var maximumWaterContent = 200;
    }
    else if (maximumNominalSizeOfAggregate == "12.5 mm") {
        var maximumWaterContent = 195;
    }
    else {
        var maximumWaterContent = 186;
    }

    // For Target Slump
    var estimatedWaterContent = maximumWaterContent + (3.0 / 25.0) * (workability - 50.0) * (maximumWaterContent / 100);

    // As SuperPlasticizer is used the water content is reduced by 30%.

    estimatedWaterContent = estimatedWaterContent * 0.70;

    // document.getElementById("demo19").innerHTML = estimatedWaterContent;

    // Step-5:---> Calculation Of Cement

    var cementContent = estimatedWaterContent / waterCementRatio;

    // Based on the experience 10% of cement content has beed increased in the cementious material content.

    var cementiousMaterialContent = cementContent * 1.10;

    // It is proposed to add 15% Fly Ash in the mix.

    var flyAshContent = 0.15 * cementiousMaterialContent;

    // It is recommended to add 5% Silica Fume in the mix.

    var silicaFumeContent = 0.05 * cementiousMaterialContent;

    // Final cement content will be calculated after deducting Fly Ash and Silica Fume content.

    var finalCementContent = cementiousMaterialContent - flyAshContent - silicaFumeContent;

    var revisedWaterCementRatio = estimatedWaterContent / cementiousMaterialContent;

    // document.getElementById("demo20").innerHTML = cementContent;
    // document.getElementById("demo21").innerHTML = revisedWaterCementRatio;

    // Step-6:---> Calculation of proportion of volume of Coarse Aggregate and Fine Aggregate.
    if (maximumNominalSizeOfAggregate == "10 mm") {

        if (zoneOfFineAggregate == "zone iii") {
            var volumeOfCoarseAggregate = 0.56;
        }
        else if (zoneOfFineAggregate == "zone ii") {
            var volumeOfCoarseAggregate = 0.54;
        }
        else {
            var volumeOfCoarseAggregate = 0.52;
        }
    }
    else if (maximumNominalSizeOfAggregate == "12.5 mm") {

        if (zoneOfFineAggregate == "zone iii") {
            var volumeOfCoarseAggregate = 0.58;
        }
        else if (zoneOfFineAggregate == "zone ii") {
            var volumeOfCoarseAggregate = 0.56;
        }
        else {
            var volumeOfCoarseAggregate = 0.54;
        }
    }
    else {
        if (zoneOfFineAggregate == "zone iii") {
            var volumeOfCoarseAggregate = 0.68;
        }
        else if (zoneOfFineAggregate == "zone ii") {
            var volumeOfCoarseAggregate = 0.66;
        }
        else {
            var volumeOfCoarseAggregate = 0.64;
        }
    }

    if (revisedWaterCementRatio == 0.30) {
        var finalVolumeOfCoarseAggregate = volumeOfCoarseAggregate;
        var finalVolumeOfFineAggregate = 1 - finalVolumeOfCoarseAggregate;
    }
    else if (revisedWaterCementRatio < 0.30) {
        var finalVolumeOfCoarseAggregate = volumeOfCoarseAggregate + (0.01 / 0.05) * (0.30 - revisedWaterCementRatio);
        var finalVolumeOfFineAggregate = 1 - finalVolumeOfCoarseAggregate;
    }
    else {
        var finalVolumeOfCoarseAggregate = volumeOfCoarseAggregate - (0.01 / 0.05) * (revisedWaterCementRatio - 0.30);
        var finalVolumeOfFineAggregate = 1 - finalVolumeOfCoarseAggregate;
    }

    // Step-6:---> Calculation of Mix

    var volumOfEntrappedAir = entrappedAir / 100;
    volumOfEntrappedAir=volumOfEntrappedAir.toFixed(6);

    var volumeOfCement = finalCementContent / (specificGravityOfCement * 1000);
    volumeOfCement=volumeOfCement.toFixed(6);

    var volumeOfWater = estimatedWaterContent / (1 * 1000);
    volumeOfWater=volumeOfWater.toFixed(6);

    var volumeOfSilicaFume = silicaFumeContent / (specificGravityOfSilicaFume * 1000);
    volumeOfSilicaFume=volumeOfSilicaFume.toFixed(6);

    var volumeOfFlyAsh = flyAshContent / (specificGravityOfFlyAsh * 1000);
    volumeOfFlyAsh=volumeOfFlyAsh.toFixed(6);

    var volumeOfChemicalAdmixture = (cementiousMaterialContent * 0.005) / (specificGravityOfChemicalAdmixture * 1000);
    volumeOfChemicalAdmixture=volumeOfChemicalAdmixture.toFixed(6);
   
    var volumeOfAllInAggregate = (1 - Number(volumOfEntrappedAir)) - (Number(volumeOfCement) + Number(volumeOfWater) + Number(volumeOfSilicaFume) + Number(volumeOfFlyAsh) + Number(volumeOfChemicalAdmixture));
    volumeOfAllInAggregate=volumeOfAllInAggregate.toFixed(6);

    var massOfCoarseAggregate = (volumeOfAllInAggregate)  * finalVolumeOfCoarseAggregate * specificGravityOfCoarseAggregate * 1000;
    massOfCoarseAggregate=massOfCoarseAggregate.toFixed(2);

    var massOfFineAggregate = (volumeOfAllInAggregate) * finalVolumeOfFineAggregate * specificGravityOfFineAggregate * 1000;
    massOfFineAggregate=massOfFineAggregate.toFixed(2);

    document.getElementById("demo22").innerHTML = volumOfEntrappedAir;
    document.getElementById("demo23").innerHTML = volumeOfCement;
    document.getElementById("demo24").innerHTML = volumeOfWater;
    document.getElementById("demo25").innerHTML = volumeOfSilicaFume;
    document.getElementById("demo26").innerHTML = volumeOfFlyAsh;
    document.getElementById("demo27").innerHTML = volumeOfChemicalAdmixture;
    document.getElementById("demo28").innerHTML = volumeOfAllInAggregate;
    document.getElementById("demo29").innerHTML = massOfCoarseAggregate;
    document.getElementById("demo30").innerHTML = massOfFineAggregate;

    var resultForm = document.getElementById('result-form')
    resultForm.classList.remove('hidden')

    window.scrollTo({top: window.pageYOffset + resultForm.getBoundingClientRect().bottom})


}

 function resetForm(){
    document.getElementById("calculation-form").reset();
}






