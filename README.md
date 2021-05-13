# Threat hunting platform GUI interface
## Run the application
```bash
git clone https://github.com/massarafune/ICS-threat-hunting-reactapp.git
npm install
npm run build
```
Once you build the application you can set up your favourite web server  
The following section describes the flow in case you choose Apache
## Apache configuration for React-router
```sh
sudo vi /etc/apache2/sites-enabled/000-default.conf
```
add the followings after `<VirtualHost>`
```
<Directory "/var/www/html">
    RewriteEngine on
    RewriteCond %{REQUEST_FILENAME} -f [OR]
    RewriteCond %{REQUEST_FILENAME} -d
    RewriteRule ^ - [L]
    RewriteRule ^ index.html [L]
</Directory>
```
then run 
```sh
sudo a2enmod rewrite
sudo systemctl restart apache2
```
React-router should work as expected