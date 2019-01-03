declare namespace ReduxState {
    interface Home {
        list: any[]
        isLoading: boolean
    }

    interface Root {
        home: Home
    }
}
