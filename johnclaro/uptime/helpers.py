import os


def ping(host):
    return os.system(f'ping -c 1 {host}')
