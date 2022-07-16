
var img_url_changer = function(data){
    // User configuration
    const { config } = this;

    var local_img_path = config.uml_changer.local_img_path;
    var pic_bed_path = config.uml_changer.pic_bed_path;

    data.content = data.content.replace(local_img_path, pic_bed_path);
    
    return data;
};


hexo.extend.filter.register('before_post_render', img_url_changer);