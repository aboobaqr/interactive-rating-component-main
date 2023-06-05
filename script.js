'use strict'

// Selecting elements
const ratingPage = document.getElementById('rating');
const postRating = document.getElementById('after-rating')

const oneStar = document.querySelector('.first-star');
const twoStar = document.querySelector('.second-star');
const threeStar = document.querySelector('.third-star');
const fourStar = document.querySelector('.fourth-star');
const fiveStar = document.querySelector('.fifth-star');
const submitBtn = document.querySelector('.btn');
const closeBtn = document.querySelector('.close-btn');

const message = document.querySelector('.message');

const rateMsg = document.querySelector('.rate');



let rate = 0;
oneStar.addEventListener('click', function(){
    rate = 1;
    oneStar.classList.add('active');
    twoStar.classList.remove('active');
    threeStar.classList.remove('active');
    fourStar.classList.remove('active');
    fiveStar.classList.remove('active');
})
twoStar.addEventListener('click', function(){
    rate = 2;
    oneStar.classList.remove('active');
    twoStar.classList.add('active');
    threeStar.classList.remove('active');
    fourStar.classList.remove('active');
    fiveStar.classList.remove('active');
})
threeStar.addEventListener('click', function(){
    rate = 3;
    oneStar.classList.remove('active');
    twoStar.classList.remove('active');
    threeStar.classList.add('active');
    fourStar.classList.remove('active');
    fiveStar.classList.remove('active');
})
fourStar.addEventListener('click', function(){
    rate = 4;
    oneStar.classList.remove('active');
    twoStar.classList.remove('active');
    threeStar.classList.remove('active');
    fourStar.classList.add('active');
    fiveStar.classList.remove('active');
})
fiveStar.addEventListener('click', function(){
    rate = 5;
    oneStar.classList.remove('active');
    twoStar.classList.remove('active');
    threeStar.classList.remove('active');
    fourStar.classList.remove('active');
    fiveStar.classList.add('active');
})


submitBtn.addEventListener('click', function(){
    rateMsg.textContent = rate;
    ratingPage.classList.add('hidden');
    postRating.classList.remove('hidden');

})

closeBtn.addEventListener('click', function(){
    ratingPage.classList.remove('hidden');
    postRating.classList.add('hidden');

    oneStar.classList.remove('active');
    twoStar.classList.remove('active');
    threeStar.classList.remove('active');
    fourStar.classList.remove('active');
    fiveStar.classList.remove('active');
})