var selectedModel = null;

function showModel(model) {
    selectedModel = models[model];
    $('#target').attr('src', selectedModel.id);
    $('#target').attr('position', selectedModel.position);
}