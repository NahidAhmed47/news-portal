// Categories data added
const categoriesDataLoad = async() => {
    const url = 'https://openapi.programming-hero.com/api/news/categories';
    const res = await fetch(url);
    const data = await res.json();
    displayCategoryName(data);
}
const displayCategoryName = (data) =>{
    const container = document.getElementById('category-container');
    data.data.news_category.forEach(category => {
        container.innerHTML += `
        <a onclick="newsDataLoad('${category.category_id}', '${category.category_name}')" class="cursor-pointer">${category.category_name}</a>
        `;
    })
}
categoriesDataLoad();
// news data from category
const newsDataLoad = async(category_id, category_name) =>{
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayDataCategoryWise(data.data, category_name);
}
// Display data category wise
const displayDataCategoryWise = (id, name) =>{
    document.getElementById('news-category-name').innerText = name;
    document.getElementById('news-count').innerText = id.length;
}