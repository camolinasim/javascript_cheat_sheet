'use strict'
let vgmSongList = {
	title: 'maybe',
	fairyFlying: 'maybe',
	house: 'maybe',
	kokiryForest: true,
	lostWoods: true,
	fairyFountain: true,
	shop: true,
	shootingGallery: 'maybe',
	kakarikoVillage: true,
	songOfStorms: true,
	lonLonRanch: true,
	zorasDomain: true,
}

const vgmKeyValueArray = Object.entries(vgmSongList);
let yesList = vgmKeyValueArray.filter(([key, value]) => value === true)
yesList = yesList.map(val => val.slice(0, 1))
const maybeList = vgmKeyValueArray.filter(([key, value]) => value === 'maybe')
console.log('yesList', yesList, 'maybeList', maybeList);


// let yesList = vgmSongList.filter(song => song.value == true)
