FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode,
)

FilePond.setOptions({
    stylePanelAspectRatio: 1.5 / 1,
    imageResizeTargetWidth: 100,
    imageResizeTargetHeight: 150
})


FilePond.parse(document.body);
