class Meal {
    constructor(
        id,
        title,
        categoryIds,
        affordability,
        complexity,
        imageurl,
        duration,
        imgradients,
        steps,
        isVegan,
        isvegeterian
    ){
        this.id = id;
        this.title = title
        this.categoryIds = categoryIds;
        this.affordability = affordability;
        this.complexity = complexity;
        this.imageurl = imageurl;
        this.duration = duration;
        this.imgradients = imgradients;
        this.steps = steps;
        this.isVegan = isVegan;
        this.isvegeterian = isvegeterian;

    }
}