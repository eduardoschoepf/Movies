// Components/Search.js

import React from 'react'
import {StyleSheet, View, TextInput, Button, FlatList, ActivityIndicator} from 'react-native'
import FilmItem from "./FilmItem";
import { getFilmsFromApiWithSearchedText } from "../API/TMDBApi"
import { getFilmsNowPlaying } from "../API/TMDBApi"

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.page = 0
        this.totalPages = 0
        this.state = {
            films: [],
            searchedText: "",
            isLoading: false
        }
        this._nowPlaying();
    }

    _nowPlaying() {
        this.page = 0
        this.totalPages = 0
        getFilmsNowPlaying(this.page+1).then(data => {
            this.page = data.page
            this.totalPages = data.total_pages
            this.setState({
                films: [ ...this.state.films, ...data.results ],
                isLoading: false
            })
        })
    }


    _searchMovies() {
        this.page = 0
        this.totalPages = 0
        this.setState({
            films: []
        })
        this._loadFilms()
    }

    _loadFilms() {
        if (this.state.searchedText.length > 0) {
            this.state.isLoading = true
            getFilmsFromApiWithSearchedText(this.state.searchedText, this.page+1).then(data => {
                this.page = data.page
                this.totalPages = data.total_pages
                this.setState({
                    films: [ ...this.state.films, ...data.results ],
                    isLoading: false
                })
            })
        }
    }

    _searchTextInputChanged(text) {
        this.setState({ searchedText: text })
    }

    _resetSearch() {
        this.setState({ films: [], searchedText: ""})
        this._nowPlaying();
    }

    _displayDetailForFilm = (idFilm) => {
        this.props.navigation.navigate("FilmDetail", { idFilm: idFilm })
    }

    render() {
        return (
            <View style={styles.main_container}>
                <View style={{flexDirection: "row"}}>
                    <TextInput
                        style={styles.text_input}
                        placeholder='Titre du film'
                        value={this.state.searchedText}
                        onChangeText={(text) => this._searchTextInputChanged(text)}
                        onSubmitEditing={() => this._searchMovies()}
                    />
                    <Button title='Annuler' onPress={() => this._resetSearch()}/>
                </View>
                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item} displayDetailForFilm={this._displayDetailForFilm} />}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        if (this.page < this.totalPages) {
                            this._loadFilms()
                        }
                    }}
                />
                { this.state.isLoading ?
                    <View style={styles.loading_container}>
                        <ActivityIndicator size='large' />
                    </View>
                    : null
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 50
    },
    text_input: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#e8e8e8',
        backgroundColor: '#ecebeb',
        borderWidth: 1,
        paddingLeft: 5
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Search