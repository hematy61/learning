use wifiscanner;

fn main() {
    for number in (1..4).rev() {
        println!("{number}!");
    }
    println!("LIFTOFF!!!");
    read_networks();
}

// a function to find wifi network SSID and print them
fn read_networks() {
    // get all the wifi networks
    // the unwrap() function will panic if there is an error. The
    // way it works is that it will return the value if there is no
    // value, otherwise it will panic. This is a good way to handle
    // errors in a simple program, but in a real program you should
    // handle the error properly.
    // for example, if you are writing a web server, you should return
    // a 500 error to the client instead of panicking.
    // for more information, see https://doc.rust-lang.org/book/ch09-02-recoverable-errors-with-result.html
    let networks = wifiscanner::scan().unwrap();

    // print the SSID of each network
    for network in networks {
        println!("SSID: {}", network.ssid);
    }
}
