# Load Balancer

Load Balancer acts as the **traffic cop** sitting in front of your servers and routing client requests across all servers capable of fulfilling those requests in a manner that maximizes speed and capacity utilization and ensures that no one server is overworked. If a one of the servers goes down, the load balancer redirects traffic to the remaining online servers.

{% resources %}
  {% Blog "https://www.nginx.com/resources/glossary/load-balancing/", "What is Load Balancing?" %}
  {% Blog "https://www.cloudflare.com/en-gb/learning/performance/what-is-load-balancing/", "Load Balancing concepts and algorithms" %}
{% endresources %}