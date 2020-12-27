let BASE_URL = ''


if (process.env.NODE_ENV == 'development') {
	// 开发环境
    //BASE_URL = 'http://127.0.0.1:8080/jeecg-boot'
    BASE_URL = 'http://47.107.245.222:9987/realtor-admin'
} else {
    // 生产环境
	//BASE_URL = 'http://boot.jeecg.org:8080/jeecg-boot'
    BASE_URL = 'http://boot.jeecg.org:8080/jeecg-boot'
}
let staticDomainURL = BASE_URL+ '/sys/common/static';

const configService = {
	apiUrl: BASE_URL,
	staticDomainURL: staticDomainURL
};

export default configService