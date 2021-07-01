module.exports = {
  apps : [{
    name   : "app1",
    script : "npm",
    args : "start",
    watch: ["components","lib", "pages","posts","public","styles"],
    // Delay between restart
    watch_delay: 1000,
    ignore_watch : ["node_modules", ".next"],
  }]
}
