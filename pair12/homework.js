let courses = [
    {id: 1, title: "HTML/CSS", category: "Frontend", price: 1200, duration: 30, rating: 4.8, available: true},
    {id: 2, title: "JS Core", category: "Frontend", price: 2500, duration: 60, rating: 4.9, available: true},
    {id: 3, title: "Vue", category: "Frontend", price: 2100, duration: 45, rating: 4.7, available: false},
    {id: 4, title: "Node", category: "Backend", price: 2800, duration: 55, rating: 4.6, available: true},
    {id: 5, title: "Python", category: "Data", price: 3000, duration: 70, rating: 4.9, available: true},
    {id: 6, title: "SQL", category: "Backend", price: 1500, duration: 35, rating: 4.5, available: false},
    {id: 7, title: "Figma", category: "Design", price: 1800, duration: 40, rating: 4.4, available: true},
    {id: 8, title: "QA", category: "QA", price: 1900, duration: 50, rating: 4.3, available: true}
];

function findCourseById(id) {
    return courses.find(course => course.id === id);
}

function filterByCategory(category) {
    return courses.filter(course => course.category === category);
}

function filterByMaxPrice(maxPrice) {
    return courses.filter(course => course.price <= maxPrice);
}

function searchByTitle(text) {
    return courses.filter(course => course.title.includes(text));
}

function getCourseTitles() {
    return courses.map(course => course.title);
}

function getDiscountedCourses() {
    return courses.map(course => {
        return {
            title: course.title,
            price: course.price * 0.85
        };
    });
}

function sortByPrice() {
    return [...courses].sort((a, b) => a.price - b.price);
}

function sortByRating() {
    return [...courses].sort((a, b) => b.rating - a.rating);
}

function sortByTitle() {
    return [...courses].sort((a, b) => {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0;
    });
}

function getAvailableStats() {
    let availableCourses = courses.filter(course => course.available === true);
    if (availableCourses.length === 0) {
        return null;
    }
    let total = 0;
    for (let i = 0; i < availableCourses.length; i++) {
        total += availableCourses[i].price;
    }
    let avg = total / availableCourses.length;
    let titles = availableCourses.map(course => course.title);
    return {
        titles: titles,
        total: total,
        avg: avg
    };
}

let isRunning = true;

do {
    let choice = +prompt(
        "Menu:\n" +
        "1. Find by ID\n" +
        "2. By category\n" +
        "3. By max price\n" +
        "4. Search by title\n" +
        "5. Titles only\n" +
        "6. Discount 15%\n" +
        "7. Sort by price\n" +
        "8. Sort by rating\n" +
        "9. Sort by title\n" +
        "10. Stats of available\n\n" +
        "Choose option (1-10):"
    );

    if (choice === 1) {
        let idCourse = +prompt("Enter course ID:");
        if (isNaN(idCourse) || idCourse <= 0) {
            alert("Invalid input");
        } else {
            let found = findCourseById(idCourse);
            if (found !== undefined) {
                alert(found.title);
            } else {
                alert("Course not found");
            }
        }
    } else if (choice === 2) {
        let categoryInput = prompt("Enter category (Frontend, Backend, Data, Design, QA):");
        if (!categoryInput) {
            alert("Invalid input");
        } else {
            let foundCourses = filterByCategory(categoryInput);
            if (foundCourses.length > 0) {
                let titles = foundCourses.map(course => course.title);
                alert(titles);
            } else {
                alert("No courses found");
            }
        }
    } else if (choice === 3) {
        let maxPrice = +prompt("Enter max price:");
        if (isNaN(maxPrice) || maxPrice < 0) {
            alert("Invalid input");
        } else {
            let foundCourses = filterByMaxPrice(maxPrice);
            if (foundCourses.length > 0) {
                let titles = foundCourses.map(course => course.title);
                alert(titles);
            } else {
                alert("No courses found");
            }
        }
    } else if (choice === 4) {
        let searchText = prompt("Enter text to search:");
        if (!searchText) {
            alert("Invalid input");
        } else {
            let foundCourses = searchByTitle(searchText);
            if (foundCourses.length > 0) {
                let titles = foundCourses.map(course => course.title);
                alert(titles);
            } else {
                alert("No courses found");
            }
        }
    } else if (choice === 5) {
        let titles = getCourseTitles();
        alert(titles);
    } else if (choice === 6) {
        let discountedCourses = getDiscountedCourses();
        let formattedCourses = discountedCourses.map(course => course.title + " " + course.price);
        alert(formattedCourses);
    } else if (choice === 7) {
        let sortedCourses = sortByPrice();
        let formattedCourses = sortedCourses.map(course => course.title + " " + course.price);
        alert(formattedCourses);
    } else if (choice === 8) {
        let sortedCourses = sortByRating();
        let formattedCourses = sortedCourses.map(course => course.title + " " + course.rating);
        alert(formattedCourses);
    } else if (choice === 9) {
        let sortedCourses = sortByTitle();
        let formattedCourses = sortedCourses.map(course => course.title);
        alert(formattedCourses);
    } else if (choice === 10) {
        let stats = getAvailableStats();
        if (stats !== null) {
            alert(stats.titles + "\nTotal: " + stats.total + "\nAverage: " + stats.avg);
        } else {
            alert("No courses found");
        }
    } else {
        alert("Wrong option");
    }

    isRunning = confirm("Back to menu?");
} while (isRunning);

alert("Bye!");
console.log("Program finished");