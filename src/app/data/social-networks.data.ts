export interface SocialNetwork {
    name: string;
    nick?: string;
    iconPath: string;
    url: string;
}

export const socialNetworks: SocialNetwork[] = [
    {
        name: 'LinkedIn',
        nick: 'andresuribeg',
        iconPath: 'assets/images/networks/linkedin.svg',
        url: 'https://www.linkedin.com/in/andresuribeg/'
    },
    {
        name: 'Email',
        nick: 'andresfelipeuribe11@gmail.com',
        iconPath: 'assets/images/networks/gmail.svg',
        url: 'mailto:andresfelipeuribe11@gmail.com'
    },
    {
        name: 'WhatsApp',
        nick: '301 656 1380',
        iconPath: 'assets/images/networks/whatsapp.svg',
        url: 'https://wa.me/573016561380'
    }
]; 