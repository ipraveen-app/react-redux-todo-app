import todoRootSaga from "./todoSaga";

function* rootSaga() {
    yield todoRootSaga();
}

export default rootSaga;
